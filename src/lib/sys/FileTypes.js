import FileIcon from '../../components/Icons/FileIcon.svelte';
import SpreadSheetIcon from '../../components/Icons/SpreadSheet.svelte';
import ImageIcon from '../../components/Icons/ImageIcon.svelte';

export const FileType = {
	document: {
		name: 'Document',
		icon: FileIcon
	},
	pdf: {
		name: 'PDF',
		icon: FileIcon
	},
	spreadsheet: {
		name: 'Spreadsheet',
		icon: SpreadSheetIcon
	},
	image: {
		name: 'Image',
		icon: ImageIcon
	},
	unknown: {
		name: 'Unknown',
		icon: FileIcon
	}
};