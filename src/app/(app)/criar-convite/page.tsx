"use client";
import { EmptyState } from "@/components/global/empty-state";
import { Button } from "@/components/ui/button";
import { DateTimePicker } from "@/components/ui/date-time-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import { useForm, type SubmitErrorHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { CreateInviteRequestBody } from "@/@types/invite";
import { createInvite } from "@/api/invites/create-invite";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import z from "zod";

const createInviteFormSchema = z.object({
	guestName: z.string(),
	phone: z.string(),
	inicialDate: z.string(),
	finalDate: z.string(),
});

export type CreateInviteFormData = z.infer<typeof createInviteFormSchema>;

export default function CreateInvite() {
	const { register, handleSubmit, setValue } = useForm<CreateInviteFormData>({
		defaultValues: {
			guestName: "",
			phone: "",
			inicialDate: "",
			finalDate: "",
		},
		resolver: zodResolver(createInviteFormSchema),
	});

	const { mutate: createPrescriptionFn, isPending } = useMutation({
		mutationFn: (data: CreateInviteRequestBody) => createInvite(data),
		mutationKey: ["create-invite"],
		onSuccess: () => {
			// queryClient.invalidateQueries({
			// 	queryKey: ["invites"],
			// });
			toast.success("Convite criado com sucesso!");
		},
	});

	const onFormError: SubmitErrorHandler<CreateInviteFormData> = (errors) => {
		console.log(errors);
		toast.error("Preencha todos os campos obrigatórios");
	};

	function handleCreateInvite(data: CreateInviteFormData) {
		// createPrescriptionFn(data);
		console.log(data);
	}

	function setInitalDate(date: string) {
		setValue("inicialDate", date);
	}

	function setFinalDate(date: string) {
		setValue("finalDate", date);
	}

	return (
		<div className="h-full space-y-4 flex flex-col">
			<div className="w-full flex justify-between items-center">
				<strong className="text-2xl">Validar Convite</strong>

				<div className="space-x-4">
					<Link href="/">
						<Button variant="secondary">Listar convites</Button>
					</Link>

					<Link href="/validar-convite">
						<Button>Validar convite</Button>
					</Link>
				</div>
			</div>

			<div className="w-full flex gap-2">
				<form
					className="flex gap-4 w-full"
					onSubmit={handleSubmit(handleCreateInvite, onFormError)}
				>
					<div className="flex flex-col gap-2">
						<Label htmlFor="name">Nome do visitante</Label>
						<Input
							id="name"
							type="text"
							placeholder="Digite o nome"
							required
							className="w-[230px]"
							{...register("guestName")}
						/>
					</div>

					<div className="flex flex-col gap-2">
						<Label>Telefone</Label>
						<PhoneInput onChange={(value) => setValue("phone", value)} />
					</div>

					<div className="flex flex-col gap-2">
						<Label>Data e horário inicial</Label>
						<DateTimePicker setValue={setInitalDate} />
					</div>

					<div className="flex flex-col gap-2">
						<Label>Data e horário final</Label>
						<DateTimePicker setValue={setFinalDate} />
					</div>

					<div className="flex flex-col w-full max-w-[150px] gap-2 justify-end">
						<Button>
							{isPending && <LoaderCircle className="animate-spin" />}

							{!isPending && "Confirmar"}
						</Button>
					</div>
				</form>
			</div>

			<div className="flex items-center justify-center flex-1 w-full">
				<EmptyState />
			</div>
		</div>
	);
}
