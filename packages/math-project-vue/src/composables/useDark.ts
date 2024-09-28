export function useDark() {
  /** 开启暗黑模式 */
  function enableDarkMode() {
    // document.body.classList.add('dark-mode')
    document.documentElement.classList.toggle('dark', true)
    localStorage.setItem('color-scheme', 'dark')
  }

  /** 关闭暗黑模式 */
  function disableDarkMode() {
    // document.body.classList.remove('dark-mode')
    document.documentElement.classList.toggle('dark', false)
    localStorage.setItem('color-scheme', 'light')
  }

  /**
   * 应用保存的主题
   * 通常在页面加载时调用
   */
  function applySavedTheme() {
    const savedTheme = localStorage.getItem('color-scheme')
    if (savedTheme === 'dark') {
      enableDarkMode()
    }
    else if (savedTheme === 'light') {
      disableDarkMode()
    }
  }

  // 检测系统是否偏好深色模式
  const prefersDarkScheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  return {
    enableDarkMode,
    disableDarkMode,
    applySavedTheme,
  }
}
