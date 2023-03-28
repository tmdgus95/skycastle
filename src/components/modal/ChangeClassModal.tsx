import React, { useState } from "react";
import { useMutation } from "react-query"; // useMutation import 추가
import { HeaderInstance } from "../../api/axios";
import Button from "../UI/Button";

type Props = {
    userInfo: {
        seq: number;
        className: string;
        name: string;
    };
    setModal: (a: boolean) => void;
};

export default function ChangeClassModal({
    userInfo: { seq, className, name },
    setModal,
}: Props) {
    const [Selected, setSelected] = useState(1);

    // useMutation으로 변경
    const { mutate, isLoading } = useMutation(
        () =>
            HeaderInstance.post(`/api/class/${seq}/${Selected}`, {}).then(
                (res) => res.data
            ),
        {
            onSuccess: () => {
                setModal(false);
                alert("반 변경이 완료 되었습니다.");
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate();
    };

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(parseInt(e.target.value));
    };

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden  w-[600px] h-[300px]">
            <h3 className="text-3xl pl-8 py-2  bg-menuColor">반 변경</h3>
            <div className="bg-slate-200 pl-8 pt-4">
                <p className="text-2xl">이름 : {name}</p>
                <p className="text-2xl">현재 반 : {className}</p>
                <form onSubmit={handleSubmit}>
                    <label className="text-2xl mr-4">변경할 반</label>
                    <select className="text-2xl mr-4" onChange={handleSelect}>
                        <option value="1">A</option>
                        <option value="2">B</option>
                        <option value="3">C</option>
                        <option value="4">D</option>
                    </select>

                    <div className="mt-8 pb-8 pl-96">
                        <Button title="반 변경" />
                    </div>
                </form>
            </div>
        </div>
    );
}
