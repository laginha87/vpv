import { DateTime } from 'luxon'

export const humanize = (d: string) => {
  const e = DateTime.fromISO(d)
  if (e.diffNow().hours > 24) {
    return `Termina a ${e.toFormat('HH:MM dd-mm-YYYY')}`
  } else {
    return `Até às ${e.toFormat('HH')}h${e.toFormat('MM')}`
  }
}

export const humanizeDuration = (d: string) => Math.floor(DateTime.fromISO(d).diffNow('minutes').minutes)
