<template>
  
  <el-config-provider :locale="locale">
    <el-container class="layout-container-demo" style="height: 100vh" >
    <el-aside :width="isMenuShow?isCollapse?'64px':'200px':'0px'" style="transition-duration: var(--el-transition-duration) ;transition-timing-function: var(--el-transition-function-ease-in-out-bezier);">
      <el-scrollbar :class="isMenuShow?'':'hidMenu'">
        <el-menu :default-openeds="['1', '3']" :collapse="isCollapse" class="el-menu-vertical-demo" >
          <el-sub-menu index="1">
            <template #title>
              <el-icon color="#409EFC"><message /></el-icon>
              
              <span>Navigator One</span>
            </template>
            <el-menu-item-group>
              <template #title>Group 1</template>
              <el-menu-item index="1-1">Option 1</el-menu-item>
              <el-menu-item index="1-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="1-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>Option4</template>
              <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><icon-menu color="#409EFC" /></el-icon>
              <span>Navigator Two</span>
            </template>
            <el-menu-item-group>
              <template #title>Group 1</template>
              <el-menu-item index="2-1">Option 1</el-menu-item>
              <el-menu-item index="2-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="2-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="2-4">
              <template #title>Option 4</template>
              <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon  class="is-loading"><setting /></el-icon>
              <span>Navigator Three</span>
            </template>
            <el-menu-item-group>
              <template #title>Group 1</template>
              <el-menu-item index="3-1">Option 1</el-menu-item>
              <el-menu-item index="3-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="3-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="3-4">
              <template #title>Option 4</template>
              <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-select v-model="value" placeholder="Select">
    <el-option-group
      v-for="group in options"
      :key="group.label"
      :label="group.label"
    >
      <el-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
          <span style="float: left">
            <el-icon><Position /></el-icon>
            {{ item.label }}
          </span>
          <span
            style="
              float: right;
              /* color: var(--el-text-color-secondary); */
              font-size: 13px;
            "
            >{{ item.value }}</span
          >
        </el-option>
    </el-option-group>
  </el-select>

        <el-color-picker v-model="color" show-alpha :predefine="predefineColors" @change="changetheme" />
      <el-button type="primary" @click="toggleMenu()">折叠导航</el-button>
      <el-button type="primary" @click="toggleMenuShow()">隐藏导航</el-button>

        <el-button mb-2 @click="toggle">Switch Language</el-button>
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px"
              ><setting
            /></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </div>
      </el-header>

      <el-main>
        <el-scrollbar>
          <nav>
            <el-calendar>
    <template #date-cell="{ data }">
      <p :class="data.isSelected ? 'is-selected' : ''">
        {{ data.day.split('-').slice(1).join('-') }}
        {{ data.isSelected ? '✔️' : '' }}
      </p>
    </template>
  </el-calendar>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <el-button type="primary" @click="toggleDark()">神灯</el-button>
      <el-button type="primary" @click="play">music</el-button>
      <el-button type="primary" @click="pause">pause</el-button>
      <div>你好</div>
      <el-table mb-1 :data="[]" />
      <el-pagination :total="100" />
          <el-space wrap fill spacer="|">
            <!-- <div v-for="i in 20" :key="i" >
              <el-button text> Text button </el-button>
            </div> -->
              <el-button v-for="i in 20" :key="i" text> Text button </el-button>
          </el-space>
    </nav>

    <router-view/>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
    
    <!-- <app /> -->
  </el-config-provider>
</template>
<script setup>
  // import zhCn from 'element-plus/lib/locale/lang/zh-cn'
  // import en from 'element-plus/lib/locale/lang/en'
import { ref ,computed} from 'vue';
import { useDark, useToggle ,useMouse ,useTitle} from '@vueuse/core'
import { useSound } from '@vueuse/sound'
import buttonSfx from './assets/07.G.E.M.邓紫棋-再见.mp3'
import { Menu as IconMenu, Message, Setting ,Position} from '@element-plus/icons-vue'

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

import { useCssVar } from '@vueuse/core'
const value = ref('')
const options = [
  {
    label: '监理人',
    options: [
      {
        value: 'Shanghai',
        label: 'Shanghai',
      },
      {
        value: 'Beijing',
        label: 'Beijing',
      },
    ],
  },
  {
    label: '打工仔',
    options: [
      {
        value: 'Chengdu',
        label: 'Chengdu',
      },
      {
        value: 'Shenzhen',
        label: 'Shenzhen',
      },
      {
        value: 'Guangzhou',
        label: 'Guangzhou',
      },
      {
        value: 'Dalian',
        label: 'Dalian',
      },
    ],
  },
]
const themeel = ref(null)
const themecolor = useCssVar('--el-color-primary', themeel)

// :root {
//   --el-color-primary: green;
// }



const color = ref('rgba(255, 69, 0, 0.68)')
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])
const changetheme=(v)=>{
  // console.log(v)
  themecolor.value = v
}
const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
}

const { play,pause } = useSound(buttonSfx)

// "x" and "y" are refs
const { x, y } = useMouse()

console.log(x.value)

const mouse = useMouse()

console.log(mouse.x.value)






const isDark = useDark()
const toggleDark = useToggle(isDark)

const isCollapse = ref(false)

const toggleMenu = useToggle(isCollapse)


const isMenuShow= ref(true)

const toggleMenuShow = useToggle(isMenuShow)

const title = computed(() => isDark.value ? '🌙 Good evening!' : '☀️ Good morning!')

useTitle(title)


</script>
<style lang="scss">
  *{
    padding:0 ;
    margin:0;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  // min-height: 400px;
}
.el-scrollbar{
  transition: all 0.3s;
}
div.hidMenu{
  position:absolute;
  transform: translateY(100px);
  min-width: 64px;
  z-index: 666;
  height:calc(100% - 100px)
}
.el-menu-item-group li.is-active{
  background-color: #1fc8db;
    background-image: linear-gradient(140deg, #EADEDB 0%, #BC70A4 50%, #BFD641 75%);
}
</style>
