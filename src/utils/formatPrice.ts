export default function formatPrice(value: number, locale?: string): string {
    const userLocale = locale || navigator.language || "en-US"

    return new Intl.NumberFormat(userLocale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value)
}
