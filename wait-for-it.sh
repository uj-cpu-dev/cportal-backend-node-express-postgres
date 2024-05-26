#!/usr/bin/env bash
# Use this script to test if a given TCP host/port are available

TIMEOUT=15
QUIET=0

print_usage() {
  echo "
Usage:
  wait-for-it.sh [-t timeout] host:port [-- command args]
  -q | --quiet                        Do not output any status messages
  -t TIMEOUT | --timeout=timeout      Timeout in seconds, zero for no timeout
  -- COMMAND ARGS                     Execute command with args after the test finishes
"
}

wait_for() {
  for i in `seq $TIMEOUT` ; do
    nc -z $HOST $PORT >/dev/null 2>&1
    result=$?
    if [ $result -eq 0 ] ; then
      if [ $QUIET -ne 1 ] ; then
        echo "wait-for-it.sh: $HOST:$PORT is available after $i seconds"
      fi
      return 0
    fi
    sleep 1
  done
  if [ $QUIET -ne 1 ] ; then
    echo "wait-for-it.sh: timeout occurred after waiting $TIMEOUT seconds for $HOST:$PORT"
  fi
  return 1
}

# process arguments
while [ "$1" != "" ] ; do
  case "$1" in
    -h | --help)
      print_usage
      exit 0
      ;;
    -q | --quiet)
      QUIET=1
      shift 1
      ;;
    -t)
      TIMEOUT="$2"
      if [ "$TIMEOUT" = "" ] ; then break ; fi
      shift 2
      ;;
    --timeout=*)
      TIMEOUT="${1#*=}"
      shift 1
      ;;
    --)
      shift
      break
      ;;
    *)
      HOSTPORT="$1"
      shift 1
      ;;
  esac
done

if [ "$HOSTPORT" = "" ] ; then
  echo "Error: you need to provide a host and port to test."
  print_usage
  exit 1
fi

HOST=$(echo $HOSTPORT | cut -d : -f 1)
PORT=$(echo $HOSTPORT | cut -d : -f 2)

if [ "$HOST" = "" ] || [ "$PORT" = "" ] ; then
  echo "Error: you need to provide a host and port to test."
  print_usage
  exit 1
fi

wait_for
RESULT=$?

if [ "$*" != "" ] ; then
  exec "$@"
else
  exit $RESULT
fi
