package com.matthiasnehlsen.birdwatch

import scala.collection.mutable

object PrioExecQueue {

  /** Priority Queue serving as application-internal prioritized event loop */
  case class Exec(fn: Option[Function0[Unit]], timeout: Int, prio: Int)
  private val execOrdering = Ordering.fromLessThan[Exec](_.prio < _.prio)
  private val execPQueue: mutable.PriorityQueue[Exec] = mutable.PriorityQueue.empty(execOrdering)
  private var dequeueCounter: Long = 0

  def pQueueNext(): Unit = {
    execPQueue.headOption.map {
      exec => {
        exec.fn.map { fn => fn() } // run function if it exists
        execPQueue.dequeue()
        BirdWatch.setPQueueSize(execPQueue.size)
        dequeueCounter += 1

        if (exec.timeout > 0) { InterOp.setTimeout(pQueueNext, exec.timeout) }
        else if (dequeueCounter % 200 == 0) {
          InterOp.setTimeout(pQueueNext, 0)
          InterOp.triggerReactWordcount()
          BirdWatch.setPQueueSize(execPQueue.size)
        }
        else pQueueNext()
      }
    }
    if (execPQueue.isEmpty) InterOp.triggerReactWordcount()
  }

  def addToPQueue(exec: Exec): Unit = {
    val prevEmpty = execPQueue.isEmpty
    execPQueue.enqueue(exec)
    if (prevEmpty) { InterOp.setTimeout(pQueueNext, 0) }   // previously empty, trigger needed
  }

  def empty(): Unit = execPQueue.clear()

  def printTest() = println("idle")

  def addIdle(): Unit = {
    //addToPQueue(Exec(Some(printTest _), 2000, 100))
  }

}
