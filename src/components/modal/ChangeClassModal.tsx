import React, { useState } from "react";
import { HeaderInstance } from "../../api/axios";

type Props = {
    userInfo: {
        seq: number;
        className: string;
        name: string;
    };
};
export default function ChangeClassModal({
    userInfo: { seq, className, name },
}: Props) {
    const [Selected, setSelected] = useState(1);
    console.log(Selected);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const body = {};
        HeaderInstance.post(`/api/class/${seq}/${Selected}`, body)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(parseInt(e.target.value));
    };
    return (
        <div className="absolute top-0 w-96 h-52 bg-slate-400">
            <p>이름: {name}</p>
            <p>현재 반: {className}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">변경할 반</label>
                <select onChange={handleSelect}>
                    <option value="1">A</option>
                    <option value="2">B</option>
                    <option value="3">C</option>
                    <option value="4">D</option>
                </select>
                <button>전송</button>
            </form>
        </div>
    );
}
