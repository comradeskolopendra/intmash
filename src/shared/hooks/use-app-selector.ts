import type { TRootState } from "@/entities";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;