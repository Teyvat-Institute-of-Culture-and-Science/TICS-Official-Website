// .vitepress/theme/Layout/toggleAppearance.ts
// 参考https://github.com/unocss/unocss/blob/main/docs/.vitepress/theme/UnoCSSLayout.vue
import { nextTick, provide } from 'vue'
// 增加dark和light时候的动效
function enableTransitions() {
    return (
        'startViewTransition' in document &&
        window.matchMedia('(prefers-reduced-motion: no-preference)').matches
    )
}
export function toggleAppearance(isDark) {
    provide(
        'toggle-appearance',
        async ({ clientX: x, clientY: y }: MouseEvent) => {
            //如果不支持动效直接切换
            if (!enableTransitions()) {
                isDark.value = !isDark.value
                return
            }
            const clipPath = [
                `circle(0px at ${x}px ${y}px)`, //圆形的半径为0，位于元素的水平x，垂直y的位置
                `circle(${Math.hypot(
                    Math.max(x, innerWidth - x),
                    Math.max(y, innerHeight - y)
                )}px at ${x}px ${y}px)` // 平方根 hypot
            ]
            // 原生的视图转换动画 View Transitions API startViewTransition
            await document.startViewTransition(async () => {
                isDark.value = !isDark.value
                await nextTick()
            }).ready

            document.documentElement.animate(
                { clipPath: isDark.value ? clipPath.reverse() : clipPath },
                {
                    duration: 300,
                    easing: 'ease-in',
                    pseudoElement: `::view-transition-${
                        isDark.value ? 'old' : 'new'
                    }(root)`
                }
            )
        }
    )
}