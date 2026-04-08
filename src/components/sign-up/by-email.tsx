const ByEmail = () => {
    return (
        <div className={'flex flex-col gap-6'}>
            <div className={'flex flex-col'}>
                <label htmlFor="entering name">Your name</label>
                <input type="text" placeholder={'Your name'}
                       className={'bg-(--dark2) pl-4 py-2.5 rounded-lg border border-(--borderStroke)'}/>
            </div>
            <div className={'flex flex-col'}>
                <label htmlFor="entering email">Your Email</label>
                <input type="email" placeholder={'Your email'}
                       className={'bg-(--dark2) pl-4 py-2.5 rounded-lg border border-(--borderStroke)'}/>
            </div>
        </div>
    )
};

export default ByEmail;