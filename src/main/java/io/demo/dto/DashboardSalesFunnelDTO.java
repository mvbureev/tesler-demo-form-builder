package io.demo.dto;

import io.tesler.api.data.dto.DataResponseDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DashboardSalesFunnelDTO extends DataResponseDTO {

	private String funnelKey;

	private Long amount;

	private String color;

}
