<template>
  <div>
    <div v-show="show" class="modal" style="display:block" @click.self="close">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button @click="close" class="close">×</button>
            <h4 class="modal-title">
              <slot name="title"></slot>
            </h4>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>

    <div v-show="show" class="modal-backdrop fade in" @click="close"></div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    props: {
      // 是否显示弹窗
      show: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      close() {
        // 触发事件以关闭弹窗
        this.$emit('update:show', false)
      }
    },
    watch: {
      show(value) {
        // 监听 show 值以切换 body 上 modal-open 类
        const bodyClassList = document.body.classList

        if (value) {
          bodyClassList.add('modal-open')
        } else {
          bodyClassList.remove('modal-open')
        }
      }
    }
  }
</script>

<style scoped>

</style>
