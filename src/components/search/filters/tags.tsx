import { Checkbox, FormControlLabel, FormGroup, FormLabel } from "@mui/material"
import * as React from "react"
import { ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTag, getTags, removeTag } from "../../../store/filters.reducer"

export const TagsFilter = () => {
  const dispatch = useDispatch()
  const tags = useSelector(getTags)
  const knownTags = ["Dog", "Cat", "Chew", "Formula", "Shampoo"]

  const handleTagChange = (tag: string, enabled: boolean) => {
    dispatch(enabled ? addTag(tag) : removeTag(tag))
  }

  return (
    <FormGroup>
      <FormLabel>Categories</FormLabel>
      {knownTags.map((t) => (
        <FormControlLabel
          control={
            <Checkbox
              checked={tags.includes(t)}
              data-testid={`tag-filter-${t}`}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleTagChange(t, e.target.checked)}
              size="small"
            />
          }
          key={t}
          label={t}
        />
      ))}
    </FormGroup>
  )
}
