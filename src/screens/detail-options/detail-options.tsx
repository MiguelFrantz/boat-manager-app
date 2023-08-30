import { DeleteOutlined, EditOutlined, QrcodeOutlined, SaveOutlined } from "@ant-design/icons"
import { CustomButton, DetailContainer } from "./styles"

interface Props {
  readonly: boolean;
  newBoat: boolean;
  onSave: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const DetailOption = ({ readonly, newBoat, onSave, onEdit, onDelete }: Props) => {
  if (newBoat || !readonly) {
    return (
      <DetailContainer>
        <h3>Options</h3>
        <CustomButton onClick={onSave}>
          <SaveOutlined className="icon" />
          Save
        </CustomButton>
      </DetailContainer>
    )
  }

  return (
    <DetailContainer>
      <h3>Options</h3>
      <CustomButton onClick={onEdit}>
        <EditOutlined className="icon" />
        Edit details
      </CustomButton>

      <CustomButton >
        <QrcodeOutlined className="icon" />
        Generate QR-code
      </CustomButton>

      <CustomButton className="danger" onClick={onDelete}>
        <DeleteOutlined className="icon" />
        Delete boat
      </CustomButton>
    </DetailContainer>
  )
}

export { DetailOption }