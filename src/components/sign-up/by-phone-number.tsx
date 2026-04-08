const ByPhoneNumber = ({tel, setTel}: { tel: string, setTel: (prompt: string) => void }) => {
    const formatPhone = (value: string) => {
        const digits = value.replace(/\D/g, "");

        const trimmed = digits.slice(0, 9);

        const parts: string[] = [];

        if (trimmed.length > 0) {
            parts.push(trimmed.slice(0, 2));
        }
        if (trimmed.length >= 3) {
            parts.push(trimmed.slice(2, 5));
        }
        if (trimmed.length >= 6) {
            parts.push(trimmed.slice(5, 7));
        }
        if (trimmed.length >= 8) {
            parts.push(trimmed.slice(7, 9));
        }

        return parts.join(" ");
    }

    const format = (value: string) => {
        return value.replaceAll(" ", "").slice(0, 9)
    }
    return (
        <div className={'flex flex-col gap-6'}>
            <div className={'flex flex-col'}>
                <label htmlFor="entering name">Your name</label>
                <input type="text" placeholder={'Your name'}
                       className={'bg-(--dark2) pl-4 py-2.5 rounded-lg border border-(--borderStroke)'}/>
            </div>
            <div className={'flex flex-col'}>
                <label htmlFor="entering phone number">Phone number</label>
                <div
                    className={'flex bg-(--dark2) rounded-lg overflow-clip border border-(--borderStroke)'}
                >
                    <p className={'bg-(--dark)  w-fit flex items-center px-3 justify-center'}>+998</p>
                    <input type="tel" placeholder={'_ _  _ _ _  _ _  _ _  _ _'}
                           className={'outline-none pl-4 py-2.5  w-full'} value={formatPhone(tel)}
                           onChange={e => setTel(format(e.target.value))}
                    />
                </div>
            </div>
        </div>
    )
};

export default ByPhoneNumber;