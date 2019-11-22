export class DateUtils {

    ISO8601toDate(dateStr: string): Date {
        const parts = dateStr.substring(0, 10).split('-');
        const date = new Date();
        date.setFullYear(+parts[0], +parts[1] - 1, +parts[2]);
        return date;
    }

    msDateToISO8601(ms: number): string {
        const date = new Date();
        date.setTime(ms);
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    getTodayAsISO8601(): string {
        const today = new Date();
        return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    }

}