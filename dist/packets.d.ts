import { MainframeEvent } from "./enums/mainframe.events";
export interface Packet {
    event: MainframeEvent;
    id: string;
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
    isSubscriber: boolean;
    isBroadcaster: boolean;
    isTeamMember: boolean;
    isMyFavoriteStreamer: boolean;
    emotes?: {
        [emoteid: string]: string[];
    };
    type: string | undefined;
    id: string | undefined;
    teamMemberIconUrl: string | undefined;
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
export declare type WebSocketPacket = AnnounceGiveawayPacket | ChatMessagePacket | CheerPacket | DeletedChatMessagePacket | DrawGiveawayPacket | DropEmotePacket | DropUserPacket | EndGiveawayPacket | EnterGiveawayPacket | FollowPacket | ImageDropPacket | MerchPacket | MoodChangePacket | RaidPacket | ShoutOutPacket | SpecialUserJoinPacket | StartGiveawayPacket | SubPacket | TeamMemberJoinPacket | TimerPacket | WeatherPacket | WeatherTrailPacket | YeetUserPacket;
