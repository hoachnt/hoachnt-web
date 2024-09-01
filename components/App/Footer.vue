<template>
    <footer
        class="max-w-2xl mx-auto flex flex-col items-center text-black dark:text-white text-sm px-4 py-6"
    >
        <AppLogo :size="14" />
        <span class="text-center text-sm text-muted">
            © {{ new Date().getFullYear() }}, {{ useAppConfig().footerName }} -
            {{ $t("all_rights_reserved") }}.</span
        >
    </footer>
</template>
