export default function Hero() {
    return (
        <div>
            <section class="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
                <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                    <video class="min-w-full min-h-full absolute object-cover" src="https://josecuono.dev/video1.mp4" type="video/mp4" autoplay muted loop></video>
                </div>
                <div class="video-content space-y-2">
                    <h1 class="font-light text-6xl">full Hero Video</h1>
                    <h3 class="font-light text-3xl">with TailwindCSS</h3>
                </div>
            </section>
        </div>
    )
}