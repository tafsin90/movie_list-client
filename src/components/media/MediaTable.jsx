"use client";

import { Chip, Table } from "@heroui/react";
import { Pencil, Eye } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";
import DeleteMediaButton from "./DeleteMediaButton";

const MediaTable = ({ items, onDelete }) => {
  if (!items || items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-white/10 py-16 text-center">
        <p className="text-white/60">Your collection is empty.</p>

        <p className="mt-1 text-sm text-white/30">
          Add something to your collection to get started.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Mobile Layout */}
      <div className="flex flex-col gap-3 md:hidden">
        {items.map((movie) => (
          <div
            key={movie._id || movie.id}
            className="rounded-xl border border-white/10 bg-[#202020] p-3"
          >
            <div className="flex gap-3">
              {/* Poster */}
              <div className="relative h-28 w-[76px] shrink-0 overflow-hidden rounded-lg bg-[#292929]">
                {movie.poster ? (
                  <Image
                    src={movie.poster}
                    alt={movie.title}
                    fill
                    sizes="76px"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-center text-[10px] text-white/30">
                    No Poster
                  </div>
                )}
              </div>

              {/* Movie Information */}
              <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                <div>
                  <h3 className="truncate text-base font-semibold text-white">
                    {movie.title}
                  </h3>

                  <p className="mt-1 text-xs text-white/40">
                    {movie.releaseDate || "N/A"}
                  </p>

                  <div className="mt-2">
                    <Chip
                      color="accent"
                      size="sm"
                      variant="primary"
                      className="!text-black"
                    >
                      {movie.category || "N/A"}
                    </Chip>
                  </div>
                </div>

                <span className="mt-2 text-sm font-medium text-[#e5a84b]">
                  ★ {movie.imdbRating || "N/A"}
                </span>
              </div>
            </div>

            {/* Genre */}
            <div className="mt-3 border-t border-white/10 pt-3">
              <p className="text-xs leading-relaxed text-white/50">
                {movie.genres?.join(", ") || "N/A"}
              </p>
            </div>

            {/* Actions */}
            {/* Actions */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              {/* Edit */}
              <Link
                href={`/edit/${movie._id || movie.id}`}
                className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-[#292929] px-3 py-2.5 text-sm text-white/70 transition hover:border-[#e5a84b]/50 hover:text-[#e5a84b]"
              >
                <Pencil className="h-4 w-4" />
                Edit
              </Link>

              {/* Details */}
              <Link
                href={`/details/${movie._id || movie.id}`}
                className="flex items-center justify-center gap-2 rounded-lg bg-[#e5a84b] px-3 py-2.5 text-sm font-medium text-black transition hover:bg-[#f0bd68]"
              >
                <Eye className="h-4 w-4" />
                Details
              </Link>

              {/* Delete */}
              <div className="col-span-2">
                <DeleteMediaButton
                title={movie.title}
                  mediaId={movie._id || movie.id}
                  onDelete={onDelete}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tablet and Desktop Layout */}
      <div className="hidden overflow-hidden rounded-2xl border border-white/10 bg-[#181818] p-3 md:block">
        <Table variant="secondary">
          <Table.ScrollContainer className="max-h-[650px] overflow-auto">
            <Table.Content
              aria-label="Media collection table"
              className="min-w-[950px] border-separate border-spacing-x-0 border-spacing-y-2 !bg-transparent"
            >
              <Table.Header className="sticky top-0 z-10">
                <Table.Column
                  id="title"
                  isRowHeader
                  className="h-12 w-[35%] rounded-l-xl !bg-[#222222] px-5 text-xs font-semibold tracking-wider !text-white/60"
                >
                  TITLE
                </Table.Column>

                <Table.Column
                  id="genre"
                  className="w-[18%] !bg-[#222222] px-5 text-xs font-semibold tracking-wider !text-white/60"
                >
                  GENRE
                </Table.Column>

                <Table.Column
                  id="type"
                  className="w-[13%] !bg-[#222222] px-5 text-xs font-semibold tracking-wider !text-white/60"
                >
                  TYPE
                </Table.Column>

                <Table.Column
                  id="imdb"
                  className="w-[12%] !bg-[#222222] px-5 text-xs font-semibold tracking-wider !text-white/60"
                >
                  IMDB
                </Table.Column>

                <Table.Column
                  id="action"
                  className="w-[22%] rounded-r-xl !bg-[#222222] px-5 text-xs font-semibold tracking-wider !text-white/60"
                >
                  ACTION
                </Table.Column>
              </Table.Header>

              <Table.Body>
                {items.map((movie) => (
                  <Table.Row
                    key={movie._id || movie.id}
                    className="cursor-pointer"
                  >
                    {/* Title and Poster */}
                    <Table.Cell className="rounded-l-xl border-0 !bg-[#202020] px-5 py-4">
                      <div className="flex items-center gap-4">
                        <div className="relative h-19 w-13 shrink-0 overflow-hidden rounded-lg bg-[#292929]">
                          {movie.poster ? (
                            <Image
                              src={movie.poster}
                              alt={movie.title}
                              fill
                              sizes="52px"
                              className="object-cover"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center text-[10px] text-white/30">
                              No Poster
                            </div>
                          )}
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <span className="text-base font-semibold text-white">
                            {movie.title}
                          </span>

                          <span className="text-sm text-white/40">
                            {movie.releaseDate || "N/A"}
                          </span>
                        </div>
                      </div>
                    </Table.Cell>

                    {/* Genre */}
                    <Table.Cell className="border-0 !bg-[#202020] px-5 py-4 text-sm text-white/60">
                      {movie.genres?.join(", ") || "N/A"}
                    </Table.Cell>

                    {/* Type */}
                    <Table.Cell className="border-0 !bg-[#202020] px-5 py-4">
                      <Chip
                        color="accent"
                        size="sm"
                        variant="primary"
                        className="!text-black"
                      >
                        {movie.category || "N/A"}
                      </Chip>
                    </Table.Cell>

                    {/* IMDb Rating */}
                    <Table.Cell className="border-0 !bg-[#202020] px-5 py-4">
                      <span className="text-base font-medium text-[#e5a84b]">
                        ★ {movie.imdbRating || "N/A"}
                      </span>
                    </Table.Cell>

                    {/* Action Buttons */}
                    <Table.Cell className="rounded-r-xl border-0 !bg-[#202020] px-5 py-4">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/edit/${movie._id || movie.id}`}
                          className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#292929] px-3 py-2 text-sm text-white/70 transition hover:border-[#e5a84b]/50 hover:text-[#e5a84b]"
                        >
                          <Pencil className="h-4 w-4" />
                          Edit
                        </Link>

                        <Link
                          href={`/details/${movie._id || movie.id}`}
                          className="flex items-center gap-2 rounded-lg bg-[#e5a84b] px-3 py-2 text-sm font-medium text-black transition hover:bg-[#f0bd68]"
                        >
                          <Eye className="h-4 w-4" />
                          Details
                        </Link>

                        <DeleteMediaButton
                        title={movie.title}
                          mediaId={movie._id || movie.id}
                          onDelete={onDelete}
                        />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </>
  );
};

export default MediaTable;
