import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from '../types/app'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { useAppSelector }
