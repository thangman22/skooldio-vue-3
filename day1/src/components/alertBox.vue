<template fucntional>
    <div class="alert">
        <slot name="header"></slot>
        <slot name="sub-header"></slot>
    </div>
</template>

<style>
    .alert {
        border: 3px crimson solid;
        color:crimson;
    }
</style>
