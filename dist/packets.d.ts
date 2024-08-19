import { MainframeEvent } from "./enums/mainframe.events";
export interface Packet {
    event: MainframeEvent;
    id: string;
}
export interface OutgoingRaidData {
    logoUrl: string;
    username: string;
}
export interface CheerData {
    bitCount: string;
    cheererName: string;
    logoUrl: string;
}
export interface CheerPacket extends Packet {
    event: MainframeEvent.cheer;
    data: CheerData;
}
export interface DropUserData {
    logoUrl?: string;
}
export interface DropEmoteData {
    emoteUrls?: string[];
    dropType?: string;
}
export interface DropUserPacket extends Packet {
    event: MainframeEvent.dropUser;
    data: DropUserData;
}
export interface DropEmotePacket extends Packet {
    event: MainframeEvent.dropEmotes;
    data: DropEmoteData;
}
export interface SpecialUserJoinData {
    username: string;
}
export interface SpecialUserJoinPacket extends Packet {
    event: MainframeEvent.specialUserJoin;
    data: SpecialUserJoinData;
}
export interface RaidData {
    raiderCount: number;
    raider: string;
    logoUrl: string;
}
export interface RaidPacket extends Packet {
    event: MainframeEvent.raid;
    data: RaidData;
}
export interface OutgoingRaidPacket extends Packet {
    event: MainframeEvent.outgoingraid;
    data: OutgoingRaidData;
}
export interface SubData {
    logoUrl: string;
    subscriberUsername: string;
    subTier: string;
    message: string;
    months: number;
}
export interface SubPacket extends Packet {
    event: MainframeEvent.sub;
    data: SubData;
}
export interface WeatherData {
    weatherEvent: string;
}
export interface WeatherTrailData {
    trailing: boolean;
}
export interface WeatherPacket extends Packet {
    event: MainframeEvent.weather;
    data: WeatherData;
}
export interface WeatherTrailPacket extends Packet {
    event: MainframeEvent.weatherTrailEvent;
    data: WeatherTrailData;
}
export interface TeamMemberJoinData {
    logoUrl: string;
}
export interface TeamMemberJoinPacket extends Packet {
    event: MainframeEvent.teamMemberJoin;
    data: TeamMemberJoinData;
}
export interface YeetUserData {
    logoUrl: string;
}
export interface YeetUserPacket extends Packet {
    event: MainframeEvent.yeetUser;
    data: YeetUserData;
}
export interface DeletedChatMessageData {
    messageId: string;
}
export interface ChatMessageData {
    userId: string;
    username: string;
    displayName: string;
    messageId: string;
    message: string;
    logoUrl: string;
    isMod: boolean;
    isVip: boolean;
    isPartner: boolean;
    isSubscriber: boolean;
    isBroadcaster: boolean;
    isTeamMember: boolean;
    emotes?: {
        [emoteid: string]: string[];
    };
    type: string | undefined;
    id: string | undefined;
    teamMemberIconUrl: string | undefined;
    isHighlighted: boolean;
}
export interface DeletedChatMessagePacket extends Packet {
    event: MainframeEvent.deleteChatMessage;
    data: DeletedChatMessageData;
}
export interface ChatMessagePacket extends Packet {
    event: MainframeEvent.chatMessage;
    data: ChatMessageData;
}
export interface FollowData {
    followerName: string;
    logoUrl: string;
    followerUserId: string;
}
export interface FollowPacket extends Packet {
    event: MainframeEvent.follow;
    data: FollowData;
}
export interface MerchData {
}
export interface MerchPacket extends Packet {
    event: MainframeEvent.merch;
    data: MerchData;
}
export interface AnnounceGiveawayData {
}
export interface StartGiveawayData {
}
export interface EndGiveawayData {
}
export interface DrawGiveawayData {
    winner: string;
    logoUrl: string;
}
export interface EnterGiveawayData {
    username: string;
    logoUrl: string;
}
export interface AnnounceGiveawayPacket extends Packet {
    event: MainframeEvent.announceGiveaway;
    data: AnnounceGiveawayData;
}
export interface StartGiveawayPacket extends Packet {
    event: MainframeEvent.startGiveaway;
    data: StartGiveawayData;
}
export interface EndGiveawayPacket extends Packet {
    event: MainframeEvent.endGiveaway;
    data: EndGiveawayData;
}
export interface DrawGiveawayPacket extends Packet {
    event: MainframeEvent.drawGiveaway;
    data: DrawGiveawayData;
}
export interface EnterGiveawayPacket extends Packet {
    event: MainframeEvent.enterGiveaway;
    data: EnterGiveawayData;
}
export interface ImageDropData {
    type: string;
}
export interface ImageDropPacket extends Packet {
    event: MainframeEvent.imageDrop;
    data: ImageDropData;
}
export interface MoodChangeData {
    mood: string;
}
export interface MoodChangePacket extends Packet {
    event: MainframeEvent.moodChange;
    data: MoodChangeData;
}
export interface ShoutOutData {
    lastStream: {
        title: string;
        category: string;
    };
    logoUrl: string;
    username: string;
}
export interface ShoutOutPacket extends Packet {
    event: MainframeEvent.shoutOut;
    data: ShoutOutData;
}
export interface TimerData {
    minutes: number;
    description: string;
}
export interface TimerPacket extends Packet {
    event: MainframeEvent.timer;
    data: TimerData;
}
export interface BanUserData {
    userId: string;
}
export interface BanUserPacket extends Packet {
    event: MainframeEvent.banUser;
    data: BanUserData;
}
export interface TimeoutUserData {
    userId: string;
}
export interface TimeoutUserPacket extends Packet {
    event: MainframeEvent.timeoutUser;
    data: TimeoutUserData;
}
export interface NumeronymData {
    isActive: boolean;
}
export interface FirstData {
    username: string;
    logoUrl: string;
    message: string;
}
export interface NumeronymPacket extends Packet {
    event: MainframeEvent.numeronym;
    data: NumeronymData;
}
export interface FirstPacket extends Packet {
    event: MainframeEvent.first;
    data: FirstData;
}
export interface BackseatData {
    imageUrl: string;
}
export interface BackseatPacket extends Packet {
    event: MainframeEvent.backseat;
    data: BackseatData;
}
export interface FreezeData {
}
export interface TimeToTailwindData {
    time: string;
    user: {
        logoUrl: string;
        name: string;
    };
}
export interface FreezePacket extends Packet {
    event: MainframeEvent.freeze;
    data: FreezeData;
}
export interface TeamMemberForOverlay {
    displayName: string;
    logoUrl: string;
}
export interface TheClawData {
    teamMembers: TeamMemberForOverlay[];
}
export interface TheClawPacket extends Packet {
    event: MainframeEvent.theClaw;
    data: TheClawData;
}
export interface SpecialPacket extends Packet {
    event: MainframeEvent.special;
    data: any;
}
export interface TimeToTailwindPacket extends Packet {
    event: MainframeEvent.timeToTailwind;
    data: TimeToTailwindData;
}
export interface ItemSpawnData {
    zone: string;
    item: {
        rarity: number;
        name: string;
    };
}
export interface ItemSpawnPacket extends Packet {
    event: MainframeEvent.itemSpawn;
    data: ItemSpawnData;
    type: string;
}
export interface PlayerMoveData {
    username: string;
    toZone: string;
}
export interface PlayerMovePacket extends Packet {
    event: MainframeEvent.playerMove;
    data: PlayerMoveData;
    type: string;
}
export interface PlayerScannedData {
    zone: string;
    count: number;
    username: string;
}
export interface PlayerScannedPacket extends Packet {
    event: MainframeEvent.playerScanned;
    data: PlayerScannedData;
    type: string;
}
export interface PlayerCookData {
    username: string;
    recipe: string;
    rarity: number;
    lost: string[];
}
export interface PlayerCookPacket extends Packet {
    event: MainframeEvent.playerCook;
    data: PlayerCookData;
    type: string;
}
export interface PlayerCookFailData {
    username: string;
    ingredientList: string[];
}
export interface PlayerCookFailPacket extends Packet {
    event: MainframeEvent.playerCookFail;
    data: PlayerCookFailData;
    type: string;
}
export interface PlayerClaimData {
    username: string;
    zone: string;
    item: string;
}
export interface PlayerClaimPacket extends Packet {
    event: MainframeEvent.playerClaim;
    data: PlayerClaimData;
    type: string;
}
export interface PlayerDropData {
    username: string;
    zone: string;
    item: string;
    rarity: number;
}
export interface PlayerDropPacket extends Packet {
    event: MainframeEvent.playerDrop;
    data: PlayerDropData;
    type: string;
}
export interface PlayerGiftData {
    giver: string;
    receiver: string;
    zone: string;
    item: string;
    rarity: number;
}
export interface PlayerGiftPacket extends Packet {
    event: MainframeEvent.playerGift;
    data: PlayerGiftData;
    type: string;
}
export interface ReleaseUnclaimedData {
    count: number;
    zone: string;
}
export interface ReleaseUnclaimedPacket extends Packet {
    event: MainframeEvent.releaseUnclaimed;
    data: ReleaseUnclaimedData;
    type: string;
}
export interface HypeTrainBeginData {
    level: number;
}
export interface HypeTrainBeginPacket extends Packet {
    event: MainframeEvent.hypeTrainBegin;
    data: HypeTrainBeginData;
}
export interface HypeTrainProgressData {
    level: number;
}
export interface HypeTrainProgressPacket extends Packet {
    event: MainframeEvent.hypeTrainProgress;
    data: HypeTrainProgressData;
}
export interface HypeTrainEndData {
    level: number;
}
export interface HypeTrainEndPacket extends Packet {
    event: MainframeEvent.hypeTrainEnd;
    data: HypeTrainEndData;
}
export type WebSocketPacket = AnnounceGiveawayPacket | BanUserPacket | BackseatPacket | ChatMessagePacket | CheerPacket | DeletedChatMessagePacket | DrawGiveawayPacket | DropEmotePacket | DropUserPacket | EndGiveawayPacket | EnterGiveawayPacket | FirstPacket | FollowPacket | FreezePacket | ImageDropPacket | MerchPacket | MoodChangePacket | NumeronymPacket | OutgoingRaidPacket | RaidPacket | ShoutOutPacket | SpecialUserJoinPacket | StartGiveawayPacket | SpecialPacket | SubPacket | TeamMemberJoinPacket | TimerPacket | TimeoutUserPacket | TimeToTailwindPacket | TheClawPacket | WeatherPacket | WeatherTrailPacket | YeetUserPacket | ItemSpawnPacket | PlayerScannedPacket | PlayerCookPacket | PlayerCookFailPacket | PlayerMovePacket | PlayerClaimPacket | PlayerDropPacket | PlayerGiftPacket | ReleaseUnclaimedPacket | HypeTrainBeginPacket | HypeTrainProgressPacket | HypeTrainEndPacket;
