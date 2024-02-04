import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';
import { useUniquePropValues } from '../../shared/hooks';
import { resetFilter, setFilter } from '../../redux/cars/carsSlise';
import { selectFilter } from '../../redux/cars/carsSelectors';
import { priceOptions } from '../../shared/utils';
import Button from '../Button';
import filterCss from './FiltersCars.module.css';
export const FiltersCars = ({ cars }) => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const isFormDisabled = pathname === '/favorites' && cars?.length === 0;

  const price = priceOptions(cars);
  const uniqueBrands = useUniquePropValues(cars, 'make');

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    shouldDisable: isFormDisabled,
  });

  useEffect(() => {
    reset(filter);
  }, [filter, reset]);

  const onSubmit = data => {
    dispatch(setFilter(data));
  };

  const resetFilterInRedux = () => {
    dispatch(resetFilter());
    reset({
      brand: '',
      price: '',
      from: '',
      to: '',
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${filterCss.form} ${
        isFormDisabled ? filterCss.disabled : ''
      }`}
      disabled={isFormDisabled}
    >
      <div className={filterCss.flexContainer}>
        <div className={filterCss.formWrapp}>
          <div className={filterCss.selectWrap}>
            <label htmlFor="brand" className={filterCss.selectLabel}>
              Car brand
            </label>
            <Controller
              name="brand"
              control={control}
              rules={{ required: true, message: 'Brand is required' }}
              render={({ field }) => (
                <>
                  <select {...field} className={filterCss.selectBrand}>
                    <option value="" className="select-placeholder">
                      Enter the text
                    </option>
                    {uniqueBrands &&
                      uniqueBrands.map((make, idx) => (
                        <option key={idx} value={make} className="select-text">
                          {make}
                        </option>
                      ))}
                  </select>
                  {errors.brand && (
                    <p
                      className={`error ${
                        isFormDisabled ? 'opacity-0' : 'opacity-100'
                      }`}
                    >
                      {errors.brand.type === 'required'
                        ? 'Brand is required'
                        : errors.brand.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
          <div className={filterCss.selectWrapper}>
            <label htmlFor="price" className={filterCss.selectLabel}>
              Price/ 1 hour
            </label>
            <div>
              <Controller
                name="price"
                control={control}
                rules={{
                  required: true,
                  min: {
                    value: 0,
                    message: 'Must be 0 or greater',
                  },
                }}
                render={({ field }) => (
                  <>
                    <select {...field} className={filterCss.selectPrice}>
                      <option value="" className="select-placeholder">
                        To $
                      </option>
                      {price &&
                        price.map((price, index) => (
                          <option
                            key={index}
                            value={price}
                            className="select-text"
                          >
                            {price}
                          </option>
                        ))}
                    </select>
                    {errors.price && (
                      <p
                        className={`error ${
                          isFormDisabled ? 'opacity-0' : 'opacity-100'
                        }`}
                      >
                        {errors.price.type === 'required'
                          ? 'Price is required'
                          : errors.price.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
          </div>
          <div className={filterCss.container}>
            <label htmlFor="minMileage" className={filterCss.selectLabel}>
              Car mileage / km (from)
            </label>
            <div className={filterCss.relativeWrap}>
              <label className={filterCss.relative}>
                <input
                  type="number"
                  className={filterCss.selectFrom}
                  {...register('from', {
                    required: 'This field is required',
                    min: {
                      value: 0,
                      message: 'Must be 0 or greater',
                    },
                  })}
                />
                <span className={filterCss.selectPlaceholder}>From</span>
              </label>
              <label className={filterCss.relative}>
                <input
                  type="number"
                  className={filterCss.selectTo}
                  {...register('to', {
                    required: 'This field is required',
                    min: {
                      value: 0,
                      message: 'Must be 0 or greater',
                    },
                    validate: (value, { from }) => {
                      if (parseInt(value) > parseInt(from)) {
                        return true;
                      }
                      return 'To must be greater than From';
                    },
                  })}
                />
                <span className={filterCss.selectPlaceholder}>To</span>
              </label>
              <p
                className={`error flex items-center justify-between gap-1 ${
                  isFormDisabled ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {errors?.from && <span>{errors.from.message}</span>}
                {errors?.to && <span>{errors.to.message}</span>}
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-6 mb-2 flex flex-wrap items-center justify-center gap-3">
          <Button type="submit" className="button-search" label="Search" />
          <Button
            type="button"
            className="button-search"
            onClick={resetFilterInRedux}
            label="Reset"
          />
        </div>
      </div>
    </form>
  );
};

FiltersCars.propTypes = {
  cars: PropTypes.array.isRequired,
};

export default FiltersCars;
