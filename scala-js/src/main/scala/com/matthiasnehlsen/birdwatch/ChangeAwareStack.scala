package com.matthiasnehlsen.birdwatch

// custom stack implementation based on mutable Stack for any type T
// takes callback function argument, which it will call on changes with the current head after the chang
class ChangeAwareStack[T](onChange: (T) => Unit) extends scala.collection.mutable.Stack[T] {

  override def push(elem: T) = {
    val res = super.push(elem)
    onChange(this.peek())
    res
  }

  override def pop() = {
    val res = super.pop()
    onChange(this.peek())
    res
  }

  def peek() = super.head  // convenience method since stack implementation does not implement peek()
}

object ChangeAwareStack {
  def apply[T](onChange: (T) => Unit) = new ChangeAwareStack[T](onChange)
}
