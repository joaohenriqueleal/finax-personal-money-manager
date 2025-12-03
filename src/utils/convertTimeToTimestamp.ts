import type { Time } from "../types/Time"


export default function convertTimeToTimestamp(time: Time) : number {
    const now: number = Date.now()
    const msInOneDay: number = 86_400_000

    if (time == '1day') return now - msInOneDay
    else if (time == '1week') now - (msInOneDay * 7)
    else if (time == '1month') return now - (msInOneDay * 30)
    else if (time == '1year') return now - (msInOneDay * 365)

    return 0
}
