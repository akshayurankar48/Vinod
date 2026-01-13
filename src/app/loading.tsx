export default function Loading() {
    return (
        <div className="flex h-[50vh] w-full items-center justify-center bg-zinc-950">
            <div className="flex flex-col items-center gap-4">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-zinc-800 border-t-amber-500" />
                <p className="text-sm font-medium text-zinc-400 animate-pulse">Loading Nexus...</p>
            </div>
        </div>
    );
}
