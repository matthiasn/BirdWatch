@REM activator launcher script
@REM
@REM Envioronment:
@REM JAVA_HOME - location of a JDK home dir (optional if java on path)
@REM CFG_OPTS  - JVM options (optional)
@REM Configuration:
@REM activatorconfig.txt found in the ACTIVATOR_HOME.
@setlocal enabledelayedexpansion

@echo off
if "%ACTIVATOR_HOME%"=="" set "ACTIVATOR_HOME=%~dp0"
set ERROR_CODE=0
set APP_VERSION=1.0.0
set ACTIVATOR_LAUNCH_JAR=activator-launch-%APP_VERSION%.jar

rem Detect if we were double clicked, although theoretically A user could
rem manually run cmd /c
for %%x in (%cmdcmdline%) do if %%~x==/c set DOUBLECLICKED=1

rem FIRST we load the config file of extra options.
set "CFG_FILE=%UserProfile%\.activator\activatorconfig.txt"
set CFG_OPTS=
if exist %CFG_FILE% (
  FOR /F "tokens=* eol=# usebackq delims=" %%i IN ("%CFG_FILE%") DO (
    set DO_NOT_REUSE_ME=%%i
    rem ZOMG (Part #2) WE use !! here to delay the expansion of
    rem CFG_OPTS, otherwise it remains "" for this loop.
    set CFG_OPTS=!CFG_OPTS! !DO_NOT_REUSE_ME!
  )
)

rem We use the value of the JAVACMD environment variable if defined
set _JAVACMD=%JAVACMD%

if "%_JAVACMD%"=="" (
  if not "%JAVA_HOME%"=="" (
    if exist "%JAVA_HOME%\bin\java.exe" set "_JAVACMD=%JAVA_HOME%\bin\java.exe"
  )
)

if "%_JAVACMD%"=="" set _JAVACMD=java

rem Detect if this java is ok to use.
for /F %%j in ('"%_JAVACMD%" -version  2^>^&1') do (
  if %%~j==Java set JAVAINSTALLED=1
)

rem Detect the same thing about javac
if "%_JAVACCMD%"=="" (
  if not "%JAVA_HOME%"=="" (
    if exist "%JAVA_HOME%\bin\javac.exe" set "_JAVACCMD=%JAVA_HOME%\bin\javac.exe"
  )
)
if "%_JAVACCMD%"=="" set _JAVACCMD=javac
for /F %%j in ('"%_JAVACCMD%" -version 2^>^&1') do (
  if %%~j==javac set JAVACINSTALLED=1
)

rem BAT has no logiclal or, so we do it OLD SCHOOL! Oppan Redmond Style
set JAVAOK=true
if not defined JAVAINSTALLED set JAVAOK=false
if not defined JAVACINSTALLED set JAVAOK=false

if "%JAVAOK%"=="false" (
  echo.
  echo A Java JDK is not installed or can't be found.
  if not "%JAVA_HOME%"=="" (
    echo JAVA_HOME = "%JAVA_HOME%"
  )
  echo.
  echo Please go to
  echo   http://www.oracle.com/technetwork/java/javase/downloads/index.html
  echo and download a valid Java JDK and install before running Activator.
  echo.
  echo If you think this message is in error, please check
  echo your environment variables to see if "java.exe" and "javac.exe" are
  echo available via JAVA_HOME or PATH.
  echo.
  if defined DOUBLECLICKED pause
  exit /B 1
)


rem We use the value of the JAVA_OPTS environment variable if defined, rather than the config.
set _JAVA_OPTS=%JAVA_OPTS%
if "%_JAVA_OPTS%"=="" set _JAVA_OPTS=%CFG_OPTS%

:run

if "%*"=="" (
  if defined DOUBLECLICKED (
    set CMDS="ui"
  ) else set CMD=%*
) else set CMDS=%*

rem We add a / in front, so we get file:///C: instead of file://C:
rem Java considers the later a UNC path.
rem We also attempt a solid effort at making it URI friendly.
rem We don't even bother with UNC paths.
set JAVA_FRIENDLY_HOME_1=/!ACTIVATOR_HOME:\=/!
set JAVA_FRIENDLY_HOME=/!JAVA_FRIENDLY_HOME_1: =%%20!

"%_JAVACMD%" %_JAVA_OPTS% -XX:PermSize=64M -XX:MaxPermSize=256M %ACTIVATOR_OPTS% "-Dactivator.home=%JAVA_FRIENDLY_HOME%" -jar "%ACTIVATOR_HOME%\%ACTIVATOR_LAUNCH_JAR%" %CMDS%
if ERRORLEVEL 1 goto error
goto end

:error
set ERROR_CODE=1

:end

@endlocal

exit /B %ERROR_CODE%
