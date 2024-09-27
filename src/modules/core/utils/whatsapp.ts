import { WHATSAPP_API_SEND } from "@/constants/general"

export interface OverViewItem {
  id?: string
  domain?: string
  message?: string
  langMessages?: Array<string>
  numbers?: Array<string>
}

export const getWhatsAppMessageSendURL = (overview: OverViewItem) => {
  return `${WHATSAPP_API_SEND}?phone=${overview?.numbers?.[0]}&text=${encodeURIComponent(overview?.message || 'Hello')}`
}
