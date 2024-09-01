<template>
    <footer
        class="max-w-2xl mx-auto text-black dark:text-white text-sm text-center px-4 py-6"
    >
        <span class="text-center text-sm text-muted">
            © {{ new Date().getFullYear() }}, {{ useAppConfig().footerName }} -
            {{ $t("all_rights_reserved") }}.</span
        >
    </footer>
</template>
