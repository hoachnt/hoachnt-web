import { defineStore } from "pinia";

export const useThreeModelStore = defineStore("threeModel", () => {
    const loading = ref<boolean>(true);
    const error = ref<string | null>("");

    function setLoading(value: boolean) {
        loading.value = value;
    }
    function setError(value: string | null) {
        error.value = value;
    }

    return {
        loading,
        error,
        setLoading,
        setError,
    };
});
