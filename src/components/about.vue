<template>
    <div class="about-me">
        <h1>{{ name }}</h1>
        <p>{{ bio }}</p>
        <ul>
            <li v-for="interest in interests" :key="interest">{{ interest }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "BHAVYA VAISHNANI",
            bio: "xyz",
            interests: ["Interest 1", "Interest 2", "Interest 3"],
        };
    },
};
</script>

<style scoped>
.about-me {
    text-align: center;
    padding: 20px;
    background-color: #f0f0f0;
}
</style>
