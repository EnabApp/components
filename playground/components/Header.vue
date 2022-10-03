<template>
    <div flex="~" justify="between" bg="secondary dark:secondaryOp" p="3">
        <span text="primaryOp dark:primary">Ui Playground</span>
        <div>
            <select v-model="$colorMode.preference">
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="sepia">Sepia</option>
            </select>
        </div>
    </div>
</template>

<script setup>
const colorMode = useColorMode()
console.log(colorMode.preference)
</script>