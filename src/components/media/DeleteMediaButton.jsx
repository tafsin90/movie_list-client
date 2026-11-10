
"use client";

import { Button, Modal } from "@heroui/react";
import { MdDeleteForever } from "react-icons/md";

export default function DeleteMediaButton({ mediaId,title, onDelete }) {
  const handleDelete = async () => {
    await onDelete(mediaId);
  };

  return (
    <Modal>
      {/* Delete Button */}
      <Button
        variant="secondary"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-500/10 px-3 py-2.5 text-sm font-medium text-red-400 transition hover:bg-red-500/20"
      >
        <MdDeleteForever className="h-4 w-4" />
        Delete
      </Button>

      {/* Confirmation Modal */}
      <Modal.Backdrop variant="opaque">
        <Modal.Container>
          <Modal.Dialog className="border border-white/10 bg-[#1c1c1c] text-white sm:max-w-[400px]">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-red-500/10 text-red-400">
                <MdDeleteForever className="size-6" />
              </Modal.Icon>

              <Modal.Heading className="text-white/80 text-xl">
                Delete <span className="italic font-bold text-white">{title}</span> ?
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              <p className="text-sm leading-6 text-white/50">
                Are you sure you want to delete this item <span className="text-white font-semibold italic text-base">("{title}")</span> from your
                collection? This action cannot be undone.
              </p>
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="secondary"
                className="w-full"
                slot="close"
              >
                Cancel
              </Button>

              <Button
                className="w-full bg-red-500 text-white hover:bg-red-600"
                slot="close"
                onPress={handleDelete}
              >
                Delete permanently
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
