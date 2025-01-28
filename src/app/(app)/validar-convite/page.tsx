"use client";
import { InvitesValidationBox } from "@/components/invites/invites-validation-box";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, type SubmitErrorHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { validateInvite } from "@/api/invites/validate-invite";
import { EmptyState } from "@/components/global/empty-state";
import { InvitesValidationBoxSkeleton } from "@/components/invites/invites-validation-box-skeleton";
import { InvalidInviteBox } from "@/components/invites/invites-error-box";
import { ThemeSwitcher } from "@/components/global/theme-switcher";
import { toast } from "sonner";
import { useState } from "react";

import z from "zod";
import Link from "next/link";

const validateInviteFormSchema = z.object({
	inviteCode: z.string(),
});

export type ValidateInviteFormData = z.infer<typeof validateInviteFormSchema>;

export default function ValidateInvite() {
	const [inviteCode, setInviteCode] = useState<string | null>(null);

	const { handleSubmit, register } = useForm<ValidateInviteFormData>({
		defaultValues: {
			inviteCode: "",
		},
		resolver: zodResolver(validateInviteFormSchema),
	});

	const {
		data: result,
		mutate: validateInviteFn,
		isPending,
	} = useMutation({
		mutationFn: (data: ValidateInviteFormData) =>
			validateInvite(data.inviteCode),
		mutationKey: ["validate-invite"],
	});

	const onFormError: SubmitErrorHandler<ValidateInviteFormData> = (errors) => {
		console.log(errors);
		toast.error("Preencha todos os campos obrigatórios");
	};

	function handleValidateInvite(data: ValidateInviteFormData) {
		validateInviteFn(data);
		setInviteCode(data.inviteCode);
	}

	return (
		<div className="h-full space-y-4 flex flex-col">
			<div className="w-full flex justify-between items-center">
				<strong className="text-2xl">Validar Convite</strong>

				<div className="flex items-center gap-4">
					<ThemeSwitcher />

					<Link href="/">
						<Button variant="secondary">Listar convites</Button>
					</Link>

					<Link href="/criar-convite">
						<Button>Criar convite</Button>
					</Link>
				</div>
			</div>

			<form
				onSubmit={handleSubmit(handleValidateInvite, onFormError)}
				className="w-full flex gap-2"
			>
				<Input
					type="text"
					placeholder="Digite o código do convite"
					{...register("inviteCode")}
				/>

				<Button className="w-[200px]">Validar</Button>
			</form>

			<div className="flex items-center justify-center flex-1 w-full">
				{isPending && <InvitesValidationBoxSkeleton />}

				{!isPending && result && result.data === null && inviteCode && (
					<InvalidInviteBox code={inviteCode} />
				)}

				{!isPending && result && result.data !== null && (
					<InvitesValidationBox invite={result.data} />
				)}

				{!isPending && !result && <EmptyState />}
			</div>
		</div>
	);
}
