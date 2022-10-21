import type { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../store/slices/counter'
import { changeColorScheme } from '../../store/slices/theme'

export const Home = (): JSX.Element => {
	const count = useSelector((state: RootState) => state.counter.value)
	const theme = useSelector((state: RootState) => state.theme.colorScheme)
	const dispatch = useDispatch()

	return (
		<div>
			<h2>Counter</h2>
			<ul>
				<li>value --- {count}</li>
				<li>theme --- {theme}</li>
			</ul>
			<button type="button" onClick={() => dispatch(increment())}>
				增加
			</button>
			<button type="button" onClick={() => dispatch(decrement())}>
				减少
			</button>
			<button type="button" onClick={() => dispatch(incrementByAmount(10))}>
				自定义增长
			</button>
			<button type="button" onClick={() => dispatch(changeColorScheme('dark'))}>
				修改主题
			</button>
		</div>
	)
}
