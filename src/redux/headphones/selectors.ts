import { RootState } from "@redux/instance";

export const headphonesSelector = (state: RootState) => state.headphones.headphones;