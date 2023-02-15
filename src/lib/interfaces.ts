export interface Coins {
  [key: string] : {[key: string]: number}
}

export interface CryptoObject {
    id: string,
    icon: string,
    abrv: string,
    name: string,
    findInApiKey: string,
    price: number,
    diff: number,
    chart: string,
}

export interface TrendCardProps {
  key: string,
  icon: string,
  abrv: string,
  name: string,
  price: number,
  diff: number,
  chart: string,
}

export interface FilterListItem {
  id: number,
  name: string,
  selected: boolean
}

export interface SocialIconObject {
  id: number,
  name: string,
  src: string
}

export interface FooterListItem {
  id: number,
  title: string,
  items: string[]
}