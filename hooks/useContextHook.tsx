
import { AppContext } from "@/components/Provider";
import { AppContextType } from "@/lib/types";
import { useContext } from "react"


export default function useContextHook() {
  return useContext(AppContext) as AppContextType
}
