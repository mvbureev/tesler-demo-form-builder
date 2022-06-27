package io.demo.entity.enums;

import com.fasterxml.jackson.annotation.JsonValue;
import io.demo.entity.Client;
import java.util.Arrays;
import java.util.Optional;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.jetbrains.annotations.NotNull;

@Getter
@AllArgsConstructor
public enum ClientEditStep {
	FillGeneralInformation("Fill general information", "screen/client/view/clienteditgeneral/"),
	CreateClientContact("Add client contact", "screen/client/view/clienteditcontacts/"),
	ReviewClientCard("Review client card", "screen/client/view/clienteditoverview/");

	@JsonValue
	private final String value;

	private final String editView;

	@NotNull
	public static Optional<ClientEditStep> getNextEditStep(Client client) {
		return Arrays.stream(ClientEditStep.values())
				.filter(v -> v.ordinal() > client.getEditStep().ordinal())
				.findFirst();
	}

	@NotNull
	public static Optional<ClientEditStep> getPreviousEditStep(Client client) {
		return Arrays.stream(ClientEditStep.values())
				.filter(v -> v.ordinal() < client.getEditStep().ordinal())
				.sorted((v1, v2) -> Integer.compare(v2.ordinal(), v1.ordinal()))
				.findFirst();
	}
}
