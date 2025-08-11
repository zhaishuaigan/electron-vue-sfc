<script>
export default {
    ...View.load({
        Demo: 'components/demo'
    }),
    data() {
        return {

        }
    },
    mounted() {
    },
    methods: {

        closeWindow() {
            window.close();
        }
    }
}
</script>

<template>
    <div class="header">
        <h1 class="title">New Electron Window</h1>
    </div>
    <div class="container">
        <Demo></Demo>
    </div>
    <div class="footer">

    </div>

    <div class="close-button" onclick="window.close()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
    </div>
</template>

<style>
.header {
    text-align: center;
    padding: 3rem;
    -webkit-app-region: drag;
}

.title {
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(45deg, #00d4ff, #ff00ff, #00ff88);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientShift 3s ease-in-out infinite;
    margin-bottom: 0.5rem;
    -webkit-app-region: drag;
}

.container {
    margin: 0 auto;
    padding: 2rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;

}



.close-button {
    -webkit-app-region: no-drag;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    z-index: 1000;
    color: #ffffff;
}

.close-button:hover {
    background: rgba(255, 0, 0, 0.2);
    border-color: rgba(255, 0, 0, 0.5);
    transform: scale(1.1) rotate(90deg);
    box-shadow: 0 10px 20px rgba(255, 0, 0, 0.3);
}

.close-button svg {
    transition: all 0.3s ease;
}

.close-button:hover svg {
    color: #ff4444;
}
</style>