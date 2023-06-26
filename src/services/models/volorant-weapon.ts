export interface AdsStats {
  zoomMultiplier: number;
  fireRate: number;
  runSpeedMultiplier: number;
  burstCount: number;
  firstBulletAccuracy: number;
}

export interface AltShotgunStats {
  shotgunPelletCount?: number;
  burstRate?: number;
}

export interface AirBurstStats {
  shotgunPelletCount?: number;
  burstDistance?: number;
}

export interface DamageRanges {
  rangeStartMeters?: number;
  rangeEndMeters?: number;
  headDamage?: number;
  bodyDamage?: number;
  legDamage?: number;
}

export interface GridPosition {
  row?: number;
  column?: number;
}

export interface ShopData {
  cost?: number;
  category?: string;
  categoryText?: string;
  gridPosition?: GridPosition;
  canBeTrashed?: boolean;
  image?: string;
  newImage?: string;
  newImage2?: string;
  assetPath?: string;
}

export interface Skins {
  uuid: string;
  displayName: string;
  themeUuid?: string;
  contentTierUuid?: string;
  displayIcon: string;
  wallpaper?: string;
  assetPath?: string;
}

export interface WeaponStats {
  fireRate: number;
  magazineSize: number;
  runSpeedMultiplier: number;
  equipTimeSeconds: number;
  reloadTimeSeconds: number;
  firstBulletAccuracy: number;
  shotgunPelletCount: number;
  wallPenetration: string;
  feature: string;
  fireMode: string;
  altFireType: string;
  adsStats: AdsStats;
  altShotgunStats?: AltShotgunStats;
  airBurstStats?: AirBurstStats;
  damageRanges?: DamageRanges[];
}

export interface Weapon {
  uuid: string;
  displayName: string;
  category: string;
  defaultSkinUuid: string;
  displayIcon: string;
  killStreamIcon: string;
  assetPath: string;
  weaponStats: WeaponStats;
  shopData?: ShopData;
  skins?: Skins[];
}

export interface WeaponApiResponse {
  status: number;
  data: Weapon[];
}
