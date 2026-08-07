interface FormInputProps {
    label: string;
    type?: string;
    placeholder?: string;
    name: string;
}

export default function FormInput ({ label, type = "text", placeholder, name }: FormInputProps) {
    return(
        <div className="flex flex-col gap-1.5">
            <label htmlFor={name} className="text-sm font-medium text-slate-700">
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />        
        </div>
    );
}