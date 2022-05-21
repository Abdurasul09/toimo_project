export const ArrowRight = () => {
    return (
        <div>
            <svg className="h-6 w-6 text-blue-700" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
                 stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
                <line x1="15" y1="16" x2="19" y2="12"/>
                <line x1="15" y1="8" x2="19" y2="12"/>
            </svg>
        </div>
    )
}

export const TelegramIcon = () => {
    return (
        <div>
            <svg className="h-8 w-8 text-blue-700 ml-2" viewBox="0 0 24 24" strokeWidth="2"
                 stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"/>
            </svg>
        </div>
    )
}