<template>
    <component :is="name" :size="size"></component>
</template>

<script>
import HomeIcon from './assets/icons/HomeIcon.vue';
import SearchIcon from './assets/icons/SearchIcon.vue';
import CollectionIcon from './assets/icons/CollectionIcon.vue';
import PlusIcon from './assets/icons/PlusIcon.vue';
import HeartFilledIcon from './assets/icons/HeartFilledIcon.vue';
import NextIcon from './assets/icons/NextIcon.vue';
import PrevIcon from './assets/icons/PrevIcon.vue';
import DownDirIcon from './assets/icons/DownDirIcon.vue';
import ExternalIcon from './assets/icons/ExternalIcon.vue';
import PlayIcon from './assets/icons/PlayIcon.vue';
import HeartIcon from './assets/icons/HeartIcon.vue';
import PictureInPictureIcon from './assets/icons/PictureInPictureIcon.vue'
import VolumeFullIcon from './assets/icons/VolumeFullIcon.vue';
import VolumeMutedIcon from './assets/icons/VolumeMutedIcon.vue';
import VolumeLowIcon from './assets/icons/VolumeLowIcon.vue';
import VolumeNormalIcon from './assets/icons/VolumeNormalIcon.vue';
import PauseIcon from './assets/icons/PauseIcon.vue';
import PlayerPrevIcon from './assets/icons/PlayerPrevIcon.vue';
import PlayerNextIcon from './assets/icons/PlayerNextIcon.vue';
import ShuffleIcon from './assets/icons/ShuffleIcon.vue';
import RepeatIcon from './assets/icons/RepeatIcon.vue';
import LyricIcon from './assets/icons/LyricIcon.vue';
import QueueIcon from './assets/icons/QueueIcon.vue';
import DeviceIcon from './assets/icons/DeviceIcon.vue';
import FullScreenIcon from './assets/icons/FullScreenIcon.vue';

export default {
    name: 'Icons',

    props: {
        name: { type: String },
        size: { type: String, default: "24" }
    },

    components: {
        home: HomeIcon,
        search: SearchIcon,
        collection: CollectionIcon,
        plus: PlusIcon,
        heartFilled: HeartFilledIcon,
        next: NextIcon,
        prev: PrevIcon,
        downDir: DownDirIcon,
        external: ExternalIcon,
        play: PlayIcon,
        heart: HeartIcon,
        pictureInPicture: PictureInPictureIcon,
        volumeFull: VolumeFullIcon,
        volumeMuted: VolumeMutedIcon,
        volumeLow: VolumeLowIcon,
        volumeNormal: VolumeNormalIcon,
        pause: PauseIcon,
        playerPrev: PlayerPrevIcon,
        playerNext: PlayerNextIcon,
        shuffle: ShuffleIcon,
        repeat: RepeatIcon,
        lyric: LyricIcon,
        queue: QueueIcon,
        device: DeviceIcon,
        fullScreen: FullScreenIcon,
    },
}
</script>