// 主题配置
export const themes = {
  minimal: {
    name: '极简灰白',
    description: '专业简洁',
    colors: {
      primary: '#2c3e50',
      secondary: '#34495e',
      accent: '#7f8c8d',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      headerBg: 'rgba(255, 255, 255, 0.5)',
      uploadBorder: 'rgba(44, 62, 80, 0.3)',
      uploadBorderHover: '#2c3e50',
      uploadBg: 'rgba(255, 255, 255, 0.95)',
      uploadBgHover: '#ffffff',
      iconColor: '#2c3e50',
      cardShadow: 'rgba(0, 0, 0, 0.08)',
      scrollbarThumb: '#7f8c8d',
      scrollbarThumbHover: '#5a6c7d'
    }
  },

  tech: {
    name: '科技蓝紫',
    description: '现代科技',
    colors: {
      primary: '#6366f1',
      secondary: '#8b5cf6',
      accent: '#a855f7',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      headerBg: 'rgba(99, 102, 241, 0.15)',
      uploadBorder: 'rgba(99, 102, 241, 0.3)',
      uploadBorderHover: '#6366f1',
      uploadBg: 'rgba(255, 255, 255, 0.95)',
      uploadBgHover: '#ffffff',
      iconColor: '#6366f1',
      cardShadow: 'rgba(99, 102, 241, 0.15)',
      scrollbarThumb: '#6366f1',
      scrollbarThumbHover: '#4f46e5'
    }
  },

  forest: {
    name: '清新绿',
    description: '自然舒适',
    colors: {
      primary: '#10b981',
      secondary: '#059669',
      accent: '#34d399',
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      headerBg: 'rgba(16, 185, 129, 0.15)',
      uploadBorder: 'rgba(16, 185, 129, 0.3)',
      uploadBorderHover: '#10b981',
      uploadBg: 'rgba(255, 255, 255, 0.95)',
      uploadBgHover: '#ffffff',
      iconColor: '#10b981',
      cardShadow: 'rgba(16, 185, 129, 0.12)',
      scrollbarThumb: '#10b981',
      scrollbarThumbHover: '#059669'
    }
  },

  sunset: {
    name: '柔和橙',
    description: '温暖活力',
    colors: {
      primary: '#f59e0b',
      secondary: '#f97316',
      accent: '#fb923c',
      background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      headerBg: 'rgba(245, 158, 11, 0.15)',
      uploadBorder: 'rgba(245, 158, 11, 0.3)',
      uploadBorderHover: '#f59e0b',
      uploadBg: 'rgba(255, 255, 255, 0.95)',
      uploadBgHover: '#ffffff',
      iconColor: '#f59e0b',
      cardShadow: 'rgba(245, 158, 11, 0.12)',
      scrollbarThumb: '#f59e0b',
      scrollbarThumbHover: '#d97706'
    }
  },

  dark: {
    name: '深色模式',
    description: '护眼舒适',
    colors: {
      primary: '#60a5fa',
      secondary: '#3b82f6',
      accent: '#93c5fd',
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      headerBg: 'rgba(30, 41, 59, 0.8)',
      uploadBorder: 'rgba(96, 165, 250, 0.3)',
      uploadBorderHover: '#60a5fa',
      uploadBg: 'rgba(30, 41, 59, 0.95)',
      uploadBgHover: 'rgba(30, 41, 59, 1)',
      iconColor: '#60a5fa',
      cardShadow: 'rgba(0, 0, 0, 0.3)',
      scrollbarThumb: '#60a5fa',
      scrollbarThumbHover: '#3b82f6',
      isDark: true
    }
  },

  ocean: {
    name: '海洋蓝',
    description: '宁静深邃',
    colors: {
      primary: '#0ea5e9',
      secondary: '#0284c7',
      accent: '#38bdf8',
      background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
      headerBg: 'rgba(14, 165, 233, 0.15)',
      uploadBorder: 'rgba(14, 165, 233, 0.3)',
      uploadBorderHover: '#0ea5e9',
      uploadBg: 'rgba(255, 255, 255, 0.95)',
      uploadBgHover: '#ffffff',
      iconColor: '#0ea5e9',
      cardShadow: 'rgba(14, 165, 233, 0.12)',
      scrollbarThumb: '#0ea5e9',
      scrollbarThumbHover: '#0284c7'
    }
  }
}

export const getTheme = (themeName) => {
  return themes[themeName] || themes.minimal
}

export const themeNames = Object.keys(themes)
