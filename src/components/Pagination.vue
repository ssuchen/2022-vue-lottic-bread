<script>
export default {
  props: ["pages"],
  methods: {
    updatePage(page) {
      this.$emit("getProduct", page);
    },
  },
  mounted() {
    // console.log(this.pages);
  },
};
</script>

<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li
        class="page-item"
        @click.prevent="updatePage(pages.current_page - 1)"
        :class="{ disabled: !pages.has_pre }"
      >
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="page in pages.total_pages"
        :class="{ active: page === pages.current_page }"
        :key="page"
        class="page-item"
        @click.prevent="updatePage(page)"
      >
        <a class="page-link" href="#">{{ page }}</a>
      </li>
      <li
        class="page-item"
        :class="{ disabled: !pages.has_next }"
        @click.prevent="updatePage(pages.current_page + 1)"
      >
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style></style>
