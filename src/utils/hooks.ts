import { useHistory } from "react-router-dom";

export type UseNavigate = [
    navigate: (path: string) => void,
    goBack: () => void,
]

export const useNavigate = (): UseNavigate => {
    const history = useHistory();

    return [
        (path: string) => {
            history.push(path);
        },
        () => {
            history.goBack()
        },
    ];
}
