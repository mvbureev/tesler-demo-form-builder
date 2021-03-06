package io.demo.dto;

import io.tesler.api.data.dto.DataResponseDTO;
import io.tesler.core.dto.multivalue.MultivalueField;
import io.tesler.model.core.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class DashboardFilterDTO extends DataResponseDTO {

	private MultivalueField fieldOfActivity;

	public DashboardFilterDTO(User user) {
		this.id = user.getId().toString();
	}

}
