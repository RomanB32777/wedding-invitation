function validateRowNum(rowNum) {
	if (!Number(rowNum) || Number(rowNum) < 2) {
		return 2;
	}

	return rowNum;
}

function doGet(e) {
	const result = {};

	const ss = SpreadsheetApp.getActive();
	const [guestSheet] = ss.getSheets();

	if (e?.parameter && "row" in e.parameter) {
		const rowNum = validateRowNum(e.parameter["row"]);
		const data = guestSheet.getRange(`B${rowNum}:C${rowNum}`).getValues();
		const [title, paragraph] = data[0];

		result.values = { title, paragraph };
	} else {
		throw new Error("Необходим уникальный номер гостя");
	}

	return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(
		ContentService.MimeType.JSON
	);
}

function doPost(e) {
	const result = {};

	const ss = SpreadsheetApp.getActive();
	const [guestSheet, answersSheet] = ss.getSheets();

	const lastRowNum = answersSheet.getLastRow() + 1;

	if (e?.parameter) {
		const { row, presence, drink } = e.parameter;

		if (!row) {
			throw new Error("Необходим уникальный номер гостя");
		}

		const rowNum = validateRowNum(row);

		const guestName = guestSheet.getRange(`A${rowNum}`).getValue();

		if (!guestName) {
			throw new Error("Гость не найден");
		} else {
			answersSheet.getRange(`A${lastRowNum}`).setValue(guestName);
			answersSheet.getRange(`B${lastRowNum}`).setValue(presence);
			answersSheet.getRange(`C${lastRowNum}`).setValue(drink);

			result.values = { stutus: "success", message: "Данные сохранены" };
		}
	} else {
		throw new Error("Форма не заполнена");
	}

	return ContentService.createTextOutput(JSON.stringify(result));
}
