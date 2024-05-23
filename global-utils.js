function globalUtils() {
    return {
        isDark: false,
        init() {
            this.isDark = document.documentElement.classList.contains('dark')
        },
        toggleDarkMode() {
            this.isDark = !this.isDark
            localStorage.setItem('darkMode', this.isDark)
            this.applyTheme()
        },
        applyTheme() {
            if (this.isDark) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        },
        normalizeValue(satoshis) {
            const btcValue = satoshis / 100000000 // Convert satoshis to BTC
            const formattedWithFixedDecimals = btcValue.toFixed(8)
            // Remove trailing zeros and an unnecessary decimal point if applicable
            const formattedWithoutTrailingZeros = formattedWithFixedDecimals.replace(/(\.\d*?[1-9])0+$|\.0*$/, '$1')
            return formattedWithoutTrailingZeros
        },
        mapCurrency(currency) {
            return { 'TEZ': 'tzBTC' }[currency] || currency
        }
    }
}